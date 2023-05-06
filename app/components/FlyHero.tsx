import {MediaFile} from '@shopify/hydrogen';
import type {
  MediaImage,
  Media,
  Metafield,
  Video as MediaVideo,
} from '@shopify/hydrogen/storefront-api-types';

/**
 * Custom Hero component that renders metafields attached to collection resources
 **/
export function FlyHero(image: MediaImage) {
  return (
    <div>
      <MediaFile
        data={image}
        className="block object-cover w-full"
        mediaOptions={{
          video: {
            controls: false,
            muted: true,
            loop: true,
            playsInline: true,
            autoPlay: true,
            previewImageOptions: {src: image.previewImage?.url ?? ''},
          },
          image: {
            crop: 'center',
            sizes: '100vw',
            alt: image.alt || '',
          },
        }}
      />
    </div>
  );
}
