import { useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { db, handleFirestoreError, OperationType } from './firebase';
import { collection, query, onSnapshot, setDoc, deleteDoc, doc, serverTimestamp } from 'firebase/firestore';

export interface Subscription {
  id: string;
  userId: string;
  category: string;
  searchQuery: string;
  createdAt: any;
}

export function useSubscriptions() {
  const { user } = useAuth();
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) {
      setSubscriptions([]);
      setLoading(false);
      return;
    }

    const q = query(collection(db, 'users', user.uid, 'subscriptions'));
    
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const newSubs: Subscription[] = [];
      snapshot.forEach(docSnap => {
        newSubs.push({ id: docSnap.id, ...docSnap.data() } as Subscription);
      });
      setSubscriptions(newSubs);
      setLoading(false);
    }, (error) => {
      handleFirestoreError(error, OperationType.GET, `users/${user.uid}/subscriptions`);
      setLoading(false);
    });

    return () => unsubscribe();
  }, [user]);

  const addSubscription = async (category: string, searchQuery: string) => {
    if (!user) return;
    const ref = doc(collection(db, 'users', user.uid, 'subscriptions')); // Auto-generate ID
    
    try {
      await setDoc(ref, {
        userId: user.uid,
        category,
        searchQuery: searchQuery || '',
        createdAt: serverTimestamp()
      });
    } catch (error) {
      handleFirestoreError(error, OperationType.CREATE, ref.path);
    }
  };

  const removeSubscription = async (subscriptionId: string) => {
    if (!user) return;
    const ref = doc(db, 'users', user.uid, 'subscriptions', subscriptionId);
    
    try {
      await deleteDoc(ref);
    } catch (error) {
      handleFirestoreError(error, OperationType.DELETE, ref.path);
    }
  };

  return { subscriptions, addSubscription, removeSubscription, loading };
}
