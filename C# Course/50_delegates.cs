namespace CodeMite
{
     class AlertDevice
     {
          public void AlertPhone(string msg, int i)
          {
               Console.WriteLine("Phoning... {0}", msg);
          }

          // public static void AlertPhone(string msg, int i)
          // {
          //      Console.WriteLine("Phoning... {0}", msg);
          // }
     }
     class MainProgram
     {
          static void AlertDesktop(string msg, int i)
          {
               Console.WriteLine("Desktoping... {0}", msg);
          }

          static void AlertTablet(string msg, int i)
          {
               Console.WriteLine("Tableting... {0}", msg);
          }
          static void AlertPhone(string msg, int i)
          {
               Console.WriteLine("Phoning... {0}", msg);
          }

          delegate void Alert(string msg, int num);

          static void Main(string[] _)
          {
               Alert alert = new AlertDevice().AlertPhone;

               alert += AlertDesktop;
               alert += AlertTablet;

               // #pragma warning disable
               //                alert -= AlertTablet;

               alert("OK", 23);
               alert("OK", 23);

               // AlertPhone("OK", 1);
               // AlertDesktop("OK", 1);
               // // AlertTablet("OK", 1);

               // AlertPhone("OK", 1);
               // AlertDesktop("OK", 1);
               // AlertTablet("OK", 1);
          }
     }
}
