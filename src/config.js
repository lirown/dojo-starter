export default {
  branch: 'roee-static-design',
  environment: 'development',
  appName: 'Dojo Engineering',
  appDescription: 'Improve your craftsmanship as a Software Engineer',
  roleToLevel: {
    'entry-level-engineer': 'Dan 1',
    'software-engineer': 'Dan 2',
    'senior-software-engineer': 'Dan 3',
    'staff-software-engineer': 'Dan 4',
    'principal-software-engineer': 'Dan 5'
  },
  roleToTitle: {
    'entry-level-engineer': 'Entry-level Engineer / Junior Engineer',
    'software-engineer': 'Software Engineer',
    'senior-software-engineer': 'Senior Engineer, Tech Lead',
    'staff-software-engineer': 'Staff Engineer, Domain Owner',
    'principal-software-engineer': 'Principal Engineer, System Architect'
  },
  sections: ['Responsibilities', 'Examples', 'Anti-Patterns', 'Resources'],
  topics: [
    'Engineering Craftsmanship',
    'Project Leadership',
    'Business Involvement',
    'Organizational Impact'
  ],
  topicsToIcon: {
    'Engineering Craftsmanship': 'craft',
    'Project Leadership': 'leader',
    'Business Involvement': 'business',
    'Organizational Impact': 'impact'
  },
   topicsToLink: {
    'Engineering Craftsmanship': 'engineering-craftsmanship',
    'Project Leadership': 'project-leadership',
    'Business Involvement': 'business-involvement',
    'Organizational Impact': 'organizational-impact'
  },
  sectionDescriptions: {
    'Responsabilities': 'Things you\'re expected to do\/know at this level',
    'Examples': 'Concrete things you\'re expected to be able to accomplish at this level',
    'Anti-Pattern': 'Patterns of thought/action you\'re expected to avoid at this level',
    'Resources': 'Books/essays/blog posts that should help you improve at this level'
  }
};
