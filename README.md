# Birthday Cake

由 Sass/Scss 開發所製成的生日蛋糕，含吹熄蠟燭等動畫特效，並將其編譯為 CSS。

Developed by Sass/Scss, this is Happy birthday cake with animation.

Sass/Scss:

```
Varible:

$back :#600054;
$vanilla: #f0e4d0;
$chocolate: #553c13;

```

```
Function:

@mixin cakelayer($color) {
    background-color: $color;
    box-shadow:
    0 2px 0px lighten($color, 5%),
    0 4px 0px darken($color, 8.2%),
    0 6px 0px darken($color, 8.4%),
    0 8px 0px darken($color, 8.6%),
    0 10px 0px darken($color, 8.8%),
    0 12px 0px darken($color, 9%),
    ...


Call:
 @include cakelayer($layer);

}

```

<img src='https://raw.githubusercontent.com/tsen1220/strawberrycake/master/cake.jpg' alt=''>
