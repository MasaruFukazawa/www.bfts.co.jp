import axios from 'axios';
import type { WP_REST_API_Post } from '~/types/wp';
export type PostType = WP_REST_API_Post;

const defaultOptions = {
    baseUrl: '/',
    params: {},
};

export class WpApi {
    options: typeof defaultOptions;
    constructor(options: Partial<typeof defaultOptions> = {}) {
        this.options = { ...defaultOptions, ...options };
    }

    async getPosts() {
        try {
            const { data: posts }: { data: WP_REST_API_Post[] } = await axios.get(
                `${this.options.baseUrl}/wp-json/wp/v2/posts`,
                {
                    params: this.options.params,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return { posts };
        } catch (e) {
            return { error: e };
        }
    }
}


export class TopPageWpApi {

    options: typeof defaultOptions;
    pageId: number

    constructor(options: Partial<typeof defaultOptions> = {}, pageId: number) {
        this.options = { ...defaultOptions, ...options };
        this.pageId = pageId;
    }

    async getData() {
        try {
            const { data: top_page_data } = await axios.get(
                `${this.options.baseUrl}/wp-json/custom/v0/top`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return { top_page_data };
        } catch (e) {
            return { error: e };
        }
    }

}


export class BizPageWpApi {

    options: typeof defaultOptions;
    pageId: number

    constructor(options: Partial<typeof defaultOptions> = {}, pageId: number) {
        this.options = { ...defaultOptions, ...options };
        this.pageId = pageId;
    }

    async getData() {
        try {
            const { data: biz_page_data } = await axios.get(
                `${this.options.baseUrl}/wp-json/custom/v0/biz`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return { biz_page_data };
        } catch (e) {
            return { error: e };
        }
    }

}

export class BizChildPageWpApi {

    options: typeof defaultOptions;
    pageId: number

    constructor(options: Partial<typeof defaultOptions> = {}, pageId: number) {
        this.options = { ...defaultOptions, ...options };
        this.pageId = pageId;
    }

    async getData() {
        try {
            const { data: page_data } = await axios.get(
                `${this.options.baseUrl}/wp-json/custom/v0/biz/child?page_id=${this.pageId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return { page_data };
        } catch (e) {
            return { error: e };
        }
    }
}


export class WpPageApi {

    options: typeof defaultOptions;
    pageId: number

    constructor(options: Partial<typeof defaultOptions> = {}, pageId: number) {
        this.options = { ...defaultOptions, ...options };
        this.pageId = pageId;
    }

    async getData() {
        try {
            const { data: page_data } = await axios.get(
                `${this.options.baseUrl}/wp-json/custom/v0/page?page_id=${this.pageId}`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return { page_data };
        } catch (e) {
            return { error: e };
        }
    }
}


export class SystemPageApi {

    options: typeof defaultOptions;
    pageId: number

    constructor(options: Partial<typeof defaultOptions> = {}) {
        this.options = { ...defaultOptions, ...options };
    }

    async getData() {
        try {
            const { data: page_data } = await axios.get(
                `${this.options.baseUrl}/wp-json/custom/v0/system`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );
            return { page_data };
        } catch (e) {
            return { error: e };
        }
    }
}


export class HeaderMenuApi {

    options: typeof defaultOptions;
    pageId: number

    constructor(options: Partial<typeof defaultOptions> = {}) {
        this.options = { ...defaultOptions, ...options };
    }

    async getData() {
        try {

            const { data: header_menu_data } = await axios.get(
                `${this.options.baseUrl}/wp-json/custom/v0/header-menu`,
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log(header_menu_data);

            return { header_menu_data };

        } catch (e) {
            return { error: e };
        }
    }
}

