using WitchSaga.Models;

namespace WitchSaga.Service
{
    public class WitchCurseMath
    {
        private static long FibonacciCumulativeSum(int n)
        {
            if (n == 0) return 0;
            if (n < 0) return -1;
            if (n == 1) return 1;

            long sum = 1;
            long a = 1, b = 1;

            for (int i = 1; i < n; i++)
            {
                long next = a + b;
                sum += b;
                a = b;
                b = next;
            }
            return sum;
        }

        public long CalculateDeadCountByPerson(Person person)
        {
            var bornYear = person.YearOfDeath - person.AgeOfDeath;
            var deadCount = FibonacciCumulativeSum(bornYear);

            return deadCount;
        }
    }
}