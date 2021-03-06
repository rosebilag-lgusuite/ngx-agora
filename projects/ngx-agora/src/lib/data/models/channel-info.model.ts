interface ChannelInfo extends Record<string | number, any> {
  /** The channel name. */
  channelName: string;
  /**
   * The unique ID to identify the relay stream in the destination channel.
   * A 32-bit unsigned integer with a value ranging from 0 to (2^32-1).
   * If you set it as `0`, the server assigns a random one. To avoid UID conflicts, this uid must be different
   * from any other UIDs in the destination channel.
   */
  uid: number;
  /** The token generated with the above `channelName` and `uid`. Do not set this parameter if you have not enabled token. */
  token: string;
}

export interface DestinationChannelInfo extends ChannelInfo {
  /**
   * The unique ID to identify the relay stream in the destination channel.
   * A 32-bit unsigned integer with a value ranging from 0 to (2^32-1).
   * If you set it as `0`, the server assigns a random one. To avoid UID conflicts, this uid must be different
   * from any other UIDs in the destination channel.
   */
  uid: number;
}

export interface SourceChannelInfo extends ChannelInfo {
  /**
   * The unique ID to identify the relay stream in the source channel.
   * A 32-bit unsigned integer with a value ranging from 0 to (232-1).
   * If you set it as `0`, the server assigns a random one. To avoid UID conflicts, this value must be different
   * from the UID of the current host.
   */
  uid: number;
}
