/**
 * This interface represents a single media track within a stream, for example an audio track or a video track.
 * @see [MediaStreamTrack](https://developer.mozilla.org/en-US/docs/Web/API/MediaStreamTrack) for details.
 */
export interface MediaStreamTrack {
  kind: 'audio' | 'video';
}
