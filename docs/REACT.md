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
