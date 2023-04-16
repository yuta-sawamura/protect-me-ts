'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('blogs', [
      {
        title: 'The Benefits of Meditation',
        content: 'Meditation is an ancient practice that has been shown to have numerous health benefits. It can help reduce stress, improve concentration, and promote feelings of peace and well-being.',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Tips for Eating a Healthy Diet',
        content: 'Eating a healthy diet is essential for maintaining good health. Some tips for eating a healthy diet include eating a variety of fruits and vegetables, choosing whole grains over refined grains, and limiting intake of processed foods.',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Importance of Regular Exercise',
        content: 'Regular exercise is important for maintaining good physical and mental health. It can help reduce the risk of chronic diseases such as heart disease, diabetes, and obesity, and can also improve mood and reduce stress.',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'How to Improve Your Sleep Quality',
        content: 'Getting good quality sleep is essential for maintaining good health. Some tips for improving sleep quality include establishing a regular sleep schedule, avoiding caffeine and alcohol before bedtime, and creating a relaxing sleep environment.',
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Benefits of Spending Time in Nature',
        content: 'Spending time in nature has been shown to have numerous health benefits. It can help reduce stress, improve mood, and promote feelings of well-being. Some ways to spend time in nature include going for a walk in the park, going on a hike, or gardening.',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Tips for Managing Stress',
        content: 'Stress can have negative effects on both physical and mental health. Some tips for managing stress include practicing relaxation techniques such as deep breathing and meditation, getting regular exercise, and seeking support from friends and family.',
        user_id: 1,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Benefits of Drinking Water',
        content: 'Drinking water is essential for maintaining good health. It helps regulate body temperature, transport nutrients, and remove waste from the body. Some tips for staying hydrated include drinking water throughout the day, and choosing water over sugary drinks.',
        user_id: 2,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'Tips for Maintaining Good Oral Health',
        content: 'Maintaining good oral health is important for overall health. Some tips for maintaining good oral health include brushing and flossing regularly, using fluoride toothpaste, and visiting the dentist regularly for checkups and cleanings.',
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        title: 'The Benefits of Spending Time with Loved Ones',
        content: 'Spending time with loved ones has been shown to have numerous health benefits. It can help reduce stress, improve mood, and promote feelings of well-being. Some ways to spend time with loved ones include going for a walk together, cooking a meal together, or playing a game.',
        user_id: 3,
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('blogs', null, {});
  }
};
