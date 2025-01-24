#include <array>
#include <vector>
#include <string_view>
#include <iostream>

class Product
{
public:
  Product() = default;
  Product(std::string name) : m_Name(name) {}

  auto set_name(const std::string &name) -> void
  {
    m_Name = name;
  }

  const std::string &get_name() const
  {
    return m_Name;
  }

private:
  std::string m_Name{};
};

auto main() -> int
{
  std::array<Product *, 5> five_products;
  for (int i = 0; auto &product : five_products)
  {
    i++;
    product = new Product();
    product->set_name(std::string("Mobile " + std::to_string(i)));
  }

  for (const auto &product : five_products)
  {
    std::cout << product->get_name() << std::endl;
  }
}