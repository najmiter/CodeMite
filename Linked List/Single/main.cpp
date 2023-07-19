#include "list.hpp"

using Int32List = List<int32_t>;

int main() 
{
  Int32List list;

  list.add(90);
  list.add(9);
  list.add(912);

  list.insert(12523, 3);

  try 
  {
    list.insert(12, 0);
  }
  catch (const std::out_of_range& error) 
  {
    std::cerr << error.what() << std::endl;
  }
  
  Int32List::display(list);
}
