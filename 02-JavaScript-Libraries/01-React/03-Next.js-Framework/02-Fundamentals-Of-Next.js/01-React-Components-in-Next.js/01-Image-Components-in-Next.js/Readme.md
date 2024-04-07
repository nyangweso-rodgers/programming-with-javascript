# `<Image />` Component in `Next.js`

## Table Of Contents

# `Next.js` Image Component

- To use the `Next.js` **Image Component**:

  - import `Image` component from the `Next.js` package via `next/image`.

    ```js
    // pages/index.js
    import Image from "next/image";
    ```

  - Add `images/` folder inside the `public/` folder and Reference required image into your component:

    ```js
    // pages/index.js
    import Image from "next/image";

    const ProfileImage = () => {
      return (
        <Image
          src="/images/nyangweso-rodgers.jpg"
          width={400}
          height={200}
          alt="Rodgers Nyangweso"
        />
      );
    };

    const SampleImageComponent = () => {
      return (
        <>
          <ProfileImage />
          <ProfileImage />
        </>
      );
    };
    ```

## Required `props`

- The **Image Component** requires the following properties: `src`, `width`, `height`, and `alt`.
  - `src`: This is the path to the image.
  - `alt`: This specifies the alternate text for an image.
  - `width`: This specifies the width of the image in `px`.
  - `height`: This specifies the height of the image in `px`.

## Optional `props`

1. `style`
2.

- Making `Next.js` **images responsive** using `layout` `prop` which has 4 options:

  - `fixed`: The image is not scalable. The image’s width and height are specified regardless of the device’s size displayed.
  - `intrinsic`: The image scales down to fit the container’s width on smaller viewports. The image does not scale up beyond its actual size on a larger viewport. The container width is set to 100%.
  - `responsive`: On different viewports, the image is scaled down or up depending on the container’s width while retaining the aspect ratio.
  - `fill`: Stretches the image’s width and height to fill the parent container.

# Resources

1. [nextjs.org/docs/pages/api-reference/components/image](https://nextjs.org/docs/pages/api-reference/components/image)
