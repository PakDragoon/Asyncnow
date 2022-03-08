// Methods and Types (from the Loom Docs)

type SetupFunction = (a: {
    apiKey: string;
    config?: Partial<SDKConfig>;
    environment?: string;
  }) => Promise<SDKResult>;

type ButtonFn = (a?: {
    element?: HTMLElement;
    hooks?: Hooks;
  }) => SDKButtonInterface;

  interface ButtonEmitterEvents {
    "bubble-drag-end": (pos: Position) => void;
    "bubble-drag-start": (pos: Position) => void;
    "bubble-move": (pos: Position) => void;
    cancel: () => void;
    complete: () => void;
    "insert-click": (video: LoomVideo) => void;
    "lifecycle-update": (state: SDKState) => void;
    "recording-complete": (video: LoomVideo) => void;
    "recording-start": () => void;
    start: () => void;
    "upload-complete": (video: LoomVideo) => void;
  }

  export interface LoomVideo {
    id: string;
    title: string;
    height: number;
    width: number;
    sharedUrl: string;
    embedUrl: string;
    thumbnailHeight?: number;
    thumbnailWidth?: number;
    thumbnailUrl?: string;
    duration?: 60;
    providerUrl: string;
  }

  interface Position {
    x: number;
    y: number;
  }

  interface SDKButtonInterface extends EventEmitter<ButtonEmitterEvents> {
    openPreRecordPanel: () => void;
    closePreRecordPanel: () => void;
    moveBubble: (p: Position) => void;
  }

  interface SDKConfig {
    bubbleResizable: boolean;
    insertButtonText: string;
    allowedRecordingTypes?: RecordingType[];
    defaultRecordingType?: RecordingType;
    styles?: SDKStyles;
  }

  interface SDKStyles {
    fontFamily?: string;
    fontUnitSize?: string;
    recordButtonColor?: string;
    recordButtonHoverColor?: string;
    recordButtonActiveColor?: string;
    primaryColor?: string;
    primaryHoverColor?: string;
    primaryActiveColor?: string;
  }

  enum SDKState {
    Closed = "closed",
    PreRecording = "pre-recording",
    ActiveRecording = "active-recording",
    PostRecording = "post-recording",
  }

  type SDKResult = {
    configureButton: ButtonFn;
    status: () => {
      state: SDKState | undefined;
      success: boolean;
    };
    teardown: () => void;
  };

  enum SDKUnsupportedReasons {
    IncompatibleBrowser = "incompatible-browser",
    ThirdPartyCookiesDisabled = "third-party-cookies-disabled",
    NoMediaStreamsSupport = "no-media-streams-support",
  }

