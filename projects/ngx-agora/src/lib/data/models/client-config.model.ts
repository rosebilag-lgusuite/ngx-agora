import { TurnServer } from './turn-server.model';

/**
 * A class defining the properties of the config parameter in the
 * [createClient](https://docs.agora.io/en/Video/API%20Reference/web/globals.html#createclient) method.
 *
 * @remark
 * - Ensure that you do not leave mode and codec as empty.
 * - Ensure that you set these properties before calling Client.join.
 *
 * Define [proxyServer](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.clientconfig.html#proxyserver) and
 * [turnServer](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.clientconfig.html#turnserver)
 * if you need to set a proxy server. For a tutorial on deploying the Proxy server on a Web client, see
 * [Deploy the Enterprise Proxy](https://docs.agora.io/en/Video/proxy_web).
 *
 * Proxy services by different service providers may result in slow performance if you are using the Firefox browser.
 * Therefore, Agora recommends using the same service provider for the proxy services.
 * If you use different service providers, Agora recommends not using the Firefox browser.
 *
 * @example
 * import { ClientConfig } from 'ngx-agora';
 *
 * const config: ClientConfig = {
 *   mode: "live",
 *   codec: "vp8",
 *   proxyServer: "YOUR NGINX PROXY SERVER IP",
 *   turnServer: {
 *     turnServerURL: "YOUR TURNSERVER URL",
 *     username: "YOUR USERNAME",
 *     password: "YOUR PASSWORD",
 *     udpport: "THE UDP PORT YOU WANT TO ADD",
 *     tcpport: "THE TCP PORT YOU WANT TO ADD",
 *     forceturn: false
 *   }
 * }
 * this.ngxAgoraService.createClient(config);
 */
export interface ClientConfig {
  /**
   * The codec the Web browser uses for encoding and decoding.
   * - `'vp8'`: Sets the browser to use VP8 for encoding and decoding.
   * - `'h264'`: Sets the browser to use H264 for encoding and decoding.
   *
   * @remark
   * Set codec as "h264" as long as Safari is involved in the session.
   */
  codec: 'vp8' | 'h264';
  /**
   * The channel profile.
   *
   * Agora Web SDK needs to know the application scenario to apply different optimization methods.
   *
   * Currently Agora Web SDK supports the following channel profiles:
   * - "live": Sets the channel profile as live broadcast.
   *   Host and audience roles that can be set by calling the
   *   [Client.setClientRole](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.client.html#setclientrole) method.
   *   The host sends and receives voice/video, while the audience can only receive voice/video.
   * - "rtc": Sets the channel profile as communication. This is used in one-on-one calls or group calls,
   *   where all users in the channel can talk freely.
   *
   * @remark
   * If you need to communicate with Agora Native SDK, Agora recommends the following settings:
   *  - For Native SDK v2.3.2 and later:
   *   Set [mode](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.clientconfig.html#mode)
   *   as "rtc" or "live" if the Native SDK uses the communication channel profile.
   *   Set [mode](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.clientconfig.html#mode)
   *   as "live" if the Native SDK uses the live broadcast channel profile.
   *  - For Native SDK before v2.3.2, set mode as "live" regardless of which channel profile the Native SDK uses.
   *
   * If you set [mode](https://docs.agora.io/en/Video/API%20Reference/web/interfaces/agorartc.clientconfig.html#mode)
   * as "rtc", the Agora Recording SDK is not supported.
   */
  mode: 'live' | 'rtc';
  /**
   * Your Nginx server domain name.
   *
   * ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
   * Enterprise users with a company firewall can use this property to pass signaling messages to the Agora SD-RTN through the Nginx Server.
   */
  proxyServer?: string;
  /**
   * TURN server settings.
   *
   * Enterprise users with a company firewall can use this property to pass audio and video data to the Agora SD-RTN through
   * the TURN Server.
   */
  turnServer?: TurnServer;
  areaCode: string[];
}
