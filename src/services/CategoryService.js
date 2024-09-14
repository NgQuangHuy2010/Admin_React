import * as request from '~/utils/httpRequest';

export const getCategory = async () => {
    try {
        const res = await request.get('category');
        return res.data;
    } catch (error) {
        console.error("Failed to fetch categories:", error);
        throw error;
    }
};

