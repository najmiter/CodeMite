#include <iostream>

#define PI 3.1415926f
#define square(n) (n * n) // 12 * 12

#define print_table(n)                                               \
    for (size_t i = 1; i <= 10; i++)                                 \
    {                                                                \
        std::cout << n << " x " << i << " = " << n * i << std::endl; \
    }

#define something(kch) std::string(#kch)

#define sizer(kch) size_##kch

auto main() -> int
{
    // auto pi = PI;
    auto number{12};
    // std::cout << square(number) << std::endl;

    // print_table(12)

    // auto s = something(234235);
    // std::string("234235");

    sizer(t) size{};
}
