const app = Vue.createApp({
  data() {
    return {
      items: [
        {
          id: 1,
          img: 'https://images.unsplash.com/photo-1634247028962-74ee8b43a834?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          name: 'ButterMilk Pancakes',
          prize: '$15.99',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ullam atquedolorum necessitatibus cumque at nobis numquam aspernatur voluptates error quamquibusdam eligendi illo iusto possimus. Ducimus deleniti alias saepe!',
          category: 'Shakes',
        },
        {
          id: 2,
          img: 'https://images.unsplash.com/photo-1619158401201-8fa932695178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
          name: 'OREO MlkShake',
          prize: '$20.55',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis saepe minus vitae id obcaecati veritatis quam nihil in? Rem nemo ratione hic sequi magni. Aut ipsam magnam cumque? Odit, nam.',
          category: 'Dinner',
        },
        {
          id: 3,
          img: 'https://images.unsplash.com/photo-1633972767165-d4e890406190?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
          name: 'Fichi',
          prize: '$10.00',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima, voluptatibus nobis aperiam, excepturi suscipit incidunt corporis dolores perferendis natus iste laborum quos mollitia harum. Illum iure optio voluptates distinctio.',
          category: 'Dinner',
        },
        {
          id: 4,
          img: 'https://images.unsplash.com/photo-1633933368862-13cbab97ded9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
          name: 'Strawbeery Margarita',
          prize: '$30.55',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat omnis fuga amet mollitia magnam, dolorum veritatis soluta quasi, harum explicabo natus temporibus laboriosam laborum eveniet fugiat, praesentium voluptas ipsam ad!',
          category: 'Breakfast',
        },
        {
          id: 5,
          img: 'https://images.unsplash.com/photo-1634247028962-74ee8b43a834?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          name: 'ButterMilk Pancakes',
          prize: '$15.99',
          text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ullam atquedolorum necessitatibus cumque at nobis numquam aspernatur voluptates error quamquibusdam eligendi illo iusto possimus. Ducimus deleniti alias saepe!',
          category: 'Shakes',
        },
        {
          id: 6,
          img: 'https://images.unsplash.com/photo-1619158401201-8fa932695178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
          name: 'OREO MlkShake',
          prize: '$20.55',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis saepe minus vitae id obcaecati veritatis quam nihil in? Rem nemo ratione hic sequi magni. Aut ipsam magnam cumque? Odit, nam.',
          category: 'Dinner',
        },
        {
          id: 7,
          img: 'https://images.unsplash.com/photo-1633972767165-d4e890406190?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80',
          name: 'Fichi',
          prize: '$10.00',
          text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut minima, voluptatibus nobis aperiam, excepturi suscipit incidunt corporis dolores perferendis natus iste laborum quos mollitia harum. Illum iure optio voluptates distinctio.',
          category: 'Dinner',
        },
        {
          id: 8,
          img: 'https://images.unsplash.com/photo-1633933368862-13cbab97ded9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80',
          name: 'Strawbeery Margarita',
          prize: '$30.55',
          text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat omnis fuga amet mollitia magnam, dolorum veritatis soluta quasi, harum explicabo natus temporibus laboriosam laborum eveniet fugiat, praesentium voluptas ipsam ad!',
          category: 'Breakfast',
        },
      ],
    };
  },
});

app.mount('#app');
