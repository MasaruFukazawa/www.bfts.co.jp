interface Options {
    elementId: string;
    elementSrc: string;
    elementNonce: string;
    elementDefer: boolean;
    onload: (event: Event) => unknown;
}

const defaultOptions: Options = {
    elementId: '',
    elementSrc: '',
    elementNonce: '',
    elementDefer: true,
    onload: null,
};

export const createScriptElement = (options: Partial<Options> = {}): void => {
    const currentOptions = { ...defaultOptions, ...options };

    let script: HTMLScriptElement;
    const headScript = document.getElementsByTagName('script')[0];
    script = document.createElement('script');
    script.id = currentOptions.elementId;
    script.src = currentOptions.elementSrc;
    script.nonce = currentOptions.elementNonce;
    script.defer = currentOptions.elementDefer;
    headScript.parentNode.insertBefore(script, headScript);

    if (currentOptions.onload) {
        script.addEventListener(
            'load',
            (event) => {
                currentOptions.onload(event);
            },
            false
        );
    }
};
