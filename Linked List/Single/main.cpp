#include "list.hpp"

using Int32List = List<int32_t>;

int main() 
{
  Int32List list;

  list.add(90);
  list.add(120);
  list.add(19);
  list.add(4);
  list.add(54);
  list.add(21);


  Int32List::display(list);

  list.reverse();

  Int32List::display(list);

  
}
