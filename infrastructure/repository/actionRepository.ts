// import type { Banner, TableItems } from '@/interfaces'

export default {
  async getActionList(params = {}): Promise<any> {
    // const { $axios } = useNuxtApp()

    // return (await $axios.get<TableItems<Banner>>('/action', params)).data

    return {
      items: [
        {
          id: 39,
          name: '1000 бонусов за первый заказ',
          alias: '1000-bonusov-za-pervyy-zakaz-v-eorderpro',
          previewPictureId: 75,
          previewText: null,
          previewTextType: null,
          sections: [],
          previewPicture: {
            id: 75,
            originalName: 'originalName.jpg',
            fileName: 'I4MDA1ODkw.jpg',
            mimetype: 'image/jpeg',
            size: 151389,
            path: 'https://firebasestorage.googleapis.com/v0/b/eorder-1cd1e.appspot.com/o/I4MDA1ODkw.jpg?alt=media',
            createdId: null,
            updatedId: null,
            createdAt: '2023-10-20T09:07:20.000Z',
            updatedAt: '2023-10-20T09:07:20.000Z',
          },
          detailPicture: null,
        },
      ],
      count: 1,
    }
  },
}
