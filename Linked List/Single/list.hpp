#pragma once

#include <iostream>
#include <exception>
#include <string>

template<typename DT = int32_t>
class List 
{
private:
  struct Node { 
    DT _data;
    Node* _link;
  };

public:
  bool empty() const noexcept { return not this->m_Size; }
  size_t size() const noexcept { return this->m_Size; }

  void add(const DT& _data)
  {
    Node* room{ new Node{_data, nullptr} };
    
    if (this->empty()) 
      this->m_Head = this->m_Tail = room;
    else 
      this->m_Tail = this->m_Tail->_link = room;
    
    this->m_Size++;
  }

  void pop()
  {
    if (this->empty()) return;

    if (this->size() == 1) 
    {
      delete this->m_Head;
      this->m_Head = this->m_Tail = nullptr;
    }
    else 
    {
      auto journey{ this->m_Head };

      while (journey->_link != this->m_Tail)
        journey = journey->_link;

      delete this->m_Tail;
      journey->_link = nullptr;
      this->m_Tail = journey;
    }

    this->m_Size--;
  }

  static void display(const List& _list)
  {
    /// ITERATIVE 😖
    auto journey{ _list.m_Head }; // 
    while (journey) // nullptr == 0 == false
    {
      std::cout << journey->_data 
                << (journey->_link ? " --> " : "\n");

      journey = journey->_link;
    }

    /// RECURSIVE 😮‍💨
    // static auto journey{ _list.m_Head }; // 
    // if (journey)
    // {
    //   std::cout << journey->_data 
    //             << (journey->_link ? " --> " : "\n");

    //   journey = journey->_link;
    //   display(_list);
    // }
  }

  void insert(const DT& _data, size_t _at)
  {
    if (_at > this->size())
      throw std::out_of_range("index " + std::to_string(_at) + " out of the bounds of the list");
    else if (_at == this->size()) { this->add(_data); return; }

    auto room{ new Node{_data, nullptr} };

    if (_at == 0)
    {
      room->_link = this->m_Head;
      this->m_Head = room;
    }
    else 
    {
      auto journey{ this->m_Head };
      for (size_t i = 1; i < _at; i++)
        journey = journey->_link;    
      
      room->_link = journey->_link;
      journey->_link = room;
    }
    this->m_Size++;
  }


private:
  Node* m_Head{};
  Node* m_Tail{};
  size_t m_Size{};
};
