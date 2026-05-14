import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { db, handleFirestoreError, OperationType } from './firebase';
import { collection, query, onSnapshot, setDoc, deleteDoc, doc, serverTimestamp, getDocs } from 'firebase/firestore';

export interface Favorite {
  userId: string;
  opportunityId: string;
  createdAt: any;
}

export function useFavorites() {
  const { user } = useAuth();
  const [favorites, setFavorites] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setFavorites({});
      setLoading(false);
      return;
    }

    const q = query(collection(db, 'users', user.uid, 'favorites'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newFavs: Record<string, boolean> = {};
      snapshot.forEach(doc => {
        newFavs[doc.id] = true;
      });
      setFavorites(newFavs);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, `users/${user.uid}/favorites`);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const toggleFavorite = async (opportunityId: string | number) => {
    if (!user) return;
    const strId = String(opportunityId);
    const ref = doc(db, 'users', user.uid, 'favorites', strId);
    
    if (favorites[strId]) {
      try {
        await deleteDoc(ref);
      } catch (error) {
        handleFirestoreError(error, OperationType.DELETE, ref.path);
      }
    } else {
      try {
        await setDoc(ref, {
          userId: user.uid,
          opportunityId: strId,
          createdAt: serverTimestamp()
        });
      } catch (error) {
        handleFirestoreError(error, OperationType.CREATE, ref.path);
      }
    }
  };

  return { favorites, toggleFavorite, loading };
}
