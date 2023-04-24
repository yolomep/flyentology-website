import clsx from 'clsx';
import type {SerializeFrom} from '@shopify/remix-oxygen';
import {MediaFile} from '@shopify/hydrogen';
import type {
  MediaImage,
  Media,
  Metafield,
  Video as MediaVideo,
} from '@shopify/hydrogen/storefront-api-types';
import {Heading, Text, Link} from '~/components';

export interface CollectionHero {
  byline: Metafield;
  cta: Metafield;
  handle: string;
  heading: Metafield;
  height?: 'full';
  loading?: 'eager' | 'lazy';
  top?: boolean;
  image: Media | MediaImage | MediaVideo;
}

/**
 * Custom Hero component that renders metafields attached to collection resources
 **/
export function FlyHero({
  byline,
  cta,
  handle,
  heading,
  height,
  loading,
  top,
  image,
}: SerializeFrom<CollectionHero>) {
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
            loading,
            crop: 'center',
            sizes: '100vw',
            alt: image.alt || '',
          },
        }}
      />
    </div>
  );
}
