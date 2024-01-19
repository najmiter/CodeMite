using System.Collections;

class MainProgram
{
    static void Main(string[] _)
    {
        List<int> ints = [1, 2, 3, 4, 5];
        ints.Add(12);

        ints.ForEach((int n) =>
        {
            n += 12;
            Console.WriteLine(n);
        });

        ints.Find((int n) => n == 2);

        ints.Contains(12);

        List<int> other = [6, 7, 8, 9, 10, 11];

        ints.AddRange(other);
        ints.Add(6);
        ints.Add(7);

        Console.WriteLine(ints.Count);

        foreach (var each in ints)
        {
            Console.WriteLine(each);
        }

        Dictionary<string, List<int>> grades = new() {
            {"me", [1,1,1]},
            {"you", [2,2,2]},
        };

        grades["him"] = [3, 3, 3];

        if (grades.TryGetValue("him", out List<int>? hisGrades))
        {
            // var hisGrades = grades["him"];
            foreach (var grade in hisGrades)
            {
                Console.WriteLine(grade);
            }
        }

        HashSet<string> names = ["me", "me", "you"];

        foreach (var name in names)
        {
            Console.WriteLine(name);
        }

        Queue<string> queue = [];
        queue.Enqueue("");
        queue.Dequeue();

        Stack<int> stack = [];
        stack.Push(13);
        stack.Pop();

        LinkedList<int> list = [];
        list.AddFirst(12);
        list.AddLast(13);

        foreach (var n in list)
        {
            Console.WriteLine(n);
        }
    }
}
