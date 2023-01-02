import { Profile } from './Profile/Profile';
import user from '../user.json'
import stats from '../stats.json'
import friends from '../friends.json'
import transactions from '../transactions.json'
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


