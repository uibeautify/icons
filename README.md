# UI Beautify Icons

Beautifully crafted free SVG UI icons for designers and developers.

UI Beautify Icons is a clean, consistent, and growing icon library designed for modern user interfaces, websites, dashboards, SaaS products, mobile apps, and design systems.

The icon library is available in 4 styles: **Outline**, **Solid**, **Duotone**, and **Duocolor**. The Outline style is 100% free, while Solid, Duotone, and Duocolor are Pro styles.

Icons are available in SVG, PNG, and React formats, making them easy to use in both design and development workflows.

## Features

- Free SVG UI icons
- Available in 4 styles: Outline, Solid, Duotone, and Duocolor
- Outline style is 100% free
- Solid, Duotone, and Duocolor are Pro styles
- Clean and consistent visual style
- Designed for modern UI projects
- Suitable for websites, dashboards, SaaS apps, mobile apps, and design systems
- Available in SVG and PNG formats
- React icon package support
- Easy to customize, resize, and recolor
- Built for designers and developers

## Included Formats

UI Beautify Icons are available in multiple formats:

- SVG
- PNG
- React
- Vanilla JS `Soon`
- Vue `Soon`
- Svelte `Soon`
- Angular `Soon`
- Preact `Soon`
- Font icon `Soon`

SVG icons are ideal for design tools, websites, and apps. PNG files are useful when you need quick image-based usage. The React package helps developers use icons directly inside React projects.

## Icon Styles

UI Beautify Icons comes in 4 styles:

| Style | Access |
|---|---|
| Outline | 100% Free |
| Solid | Pro |
| Duotone | Pro |
| Duocolor | Pro |

## React Usage

UI Beautify Icons provides two React packages:

| Package                        | Access | Includes                                    |
| ------------------------------ | ------ | ------------------------------------------- |
| `@uibeautify/icons-react-free` | Free   | Outline icons                               |
| `@uibeautify/icons-react`      | Pro    | Outline, Solid, Duotone, and Duocolor icons |

### Free React Package

Install the free package:

```bash
npm install @uibeautify/icons-react-free
```

Import the icons you want to use at the top of your file:

```jsx
import { Clipboard } from "@uibeautify/icons-react-free";
```

Then use the icon inside your component:

```jsx
export default function App() {
  return <Clipboard />;
}
```

You can customize the Outline icons using props such as `size`, `variant`, `color`, and `strokeWidth`.

```jsx
export default function App() {
  return (
    <Clipboard
      size={24}
      variant="outline"
      color="#000000"
      strokeWidth={1.5}
    />
  );
}
```

### Pro React Package

The Pro React package includes all icon styles:

* Outline
* Solid
* Duotone
* Duocolor

After upgrading your account, you can download the Pro React package from the dropdown menu under your avatar.
will be something like this `uibeautify-icons-react-0.1.0.tgz`

Install the Pro package:

```bash
npm install @uibeautify/icons-react
```

Import icons from the Pro package:

```jsx
import { Certificate } from "@uibeautify/icons-react";
```

Then use the icon inside your component:

```jsx
export default function App() {
  return <Certificate />;
}
```

### Variants

UI Beautify Icons supports 4 icon variants:

| Variant    | Access |
| ---------- | ------ |
| `outline`  | Free   |
| `solid`    | Pro    |
| `duotone`  | Pro    |
| `duocolor` | Pro    |

### Variant Props

Each variant supports different props depending on the selected style.

#### Outline

The `outline` variant supports:

* `size`
* `variant`
* `color`
* `strokeWidth`

```jsx
<Clipboard
  size={24}
  variant="outline"
  color="#000000"
  strokeWidth={1.5}
/>
```

#### Solid

The `solid` variant supports:

* `size`
* `variant`
* `color`

`strokeWidth` does not apply to solid icons.

```jsx
<Certificate
  size={24}
  variant="solid"
  color="#000000"
/>
```

#### Duotone

The `duotone` variant supports:

* `size`
* `variant`
* `color`
* `strokeWidth`
* `secondaryOpacity`

The `secondaryOpacity` prop controls the opacity of the secondary layer using the same color from the `color` prop.

For example, `secondaryOpacity={0.15}` means 15% opacity, and `secondaryOpacity={0.3}` means 30% opacity.

Recommended range:

```txt
0.10 - 0.45
```

```jsx
<Settings
  size={24}
  variant="duotone"
  color="#000000"
  strokeWidth={1.5}
  secondaryOpacity={0.15}
/>
```

#### Duocolor

The `duocolor` variant supports:

* `size`
* `variant`
* `color`
* `strokeWidth`
* `secondaryColor`

The `secondaryColor` prop controls the color of the secondary layer.

```jsx
<ArrowLeft
  size={24}
  variant="duocolor"
  color="#000000"
  strokeWidth={1.5}
  secondaryColor="#999999"
/>
```

### Importing Multiple Icons

You can import multiple icons by adding their names inside the same import statement, separated by commas:

```jsx
import { Clipboard, Certificate, Settings, ArrowLeft } from "@uibeautify/icons-react";
```

Then use them anywhere inside your component:

```jsx
export default function App() {
  return (
    <div>
      <Clipboard />
      <Certificate />
      <Settings />
      <ArrowLeft />
    </div>
  );
}
```

### Finding Icon Names

To find the correct React icon name, open any icon on the UI Beautify Icons website, choose **React** from the code block, then copy the icon name you want to import.

For easier customization, visit [icons.uibeautify.com](https://icons.uibeautify.com/) and use the icon customizer to change props live before copying the code.


## SVG Usage

You can use the SVG icons directly in your HTML, design files, or development projects.

```html
<img src="./icons/outline/scan.svg" alt="Scan icon" />
```
So the structure of your project will be like this:
```txt
Root folder/
├─ index.html
└─ icons/
   └─ outline/
      └─ scan.svg
```

You can also inline the SVG code when you need full control over styling.
```svg
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path
    d="M9 5H8.2C7.07989 5 6.51984 5 6.09202 5.21799C5.71569 5.40973 5.40973 5.71569 5.21799 6.09202C5 6.51984 5 7.07989 5 8.2V16.2C5 17.8802 5 18.7202 5.32698 19.362C5.6146 19.9265 6.07354 20.3854 6.63803 20.673C7.27976 21 8.11984 21 9.8 21H14.2C15.8802 21 16.7202
    21 17.362 20.673C17.9265 20.3854 18.3854 19.9265 18.673 19.362C19 18.7202 19 17.8802 19 16.2V8.2C19 7.07989 19 6.51984 18.782 6.09202C18.5903 5.71569 18.2843 5.40973 17.908 5.21799C17.4802 5 16.9201 5 15.8 5H15"
    stroke-width="2"
    stroke-linecap="round"
    stroke="#000000"/>
  <rect
    x="9" y="3" width="6" height="4" rx="1"
    stroke-width="2"
    stroke="#000000"/>
</svg>
```

## Figma File

The icon library is also available for designers through [Figma community](https://www.figma.com/community/file/1601662094913507099/ui-beautify-ui-icons-free-version).

Use the Figma file to browse, search, customize, and use the icons directly in your design projects.

## Free vs Pro

The **Outline** style is 100% free and can be used in real projects.

The **Pro** version includes the premium styles:

- Solid
- Duotone
- Duocolor

Pro access gives you more visual flexibility when designing interfaces, websites, apps, dashboards, and design systems.

## License

Please check the license before using the icons in personal or commercial projects.

A dedicated license file will be added to this repository.

## Links

[Website](https://icons.uibeautify.com/) | [Figma](https://www.figma.com/community/file/1601662094913507099/ui-beautify-ui-icons-free-version) | React
