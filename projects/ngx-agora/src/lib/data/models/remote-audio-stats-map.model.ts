import { RemoteAudioStats } from './remote-audio-stats.model';

/**
 * A list of RemoteAudioStats objects, one per uid.
 */
export interface RemoteAudioStatsMap {
  [uid: string]: RemoteAudioStats;
}
