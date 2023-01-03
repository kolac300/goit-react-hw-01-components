import { Profile } from './Profile/Profile';
import user from '../data/user.json'
import stats from '../data/stats.json'
import friends from '../data/friends.json'
import transactions from '../data/transactions.json'
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={stats} />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
};


