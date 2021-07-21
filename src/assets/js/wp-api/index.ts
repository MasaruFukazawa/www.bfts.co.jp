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
