import theme from '@nuxt/content-theme-docs';

export default theme({
  components: true,
  docs: {
    primaryColor: '#00BC87',
    loading: { color: '#00BC87' },
    i18n: {
      locales: () => [{
        code: 'pl',
        iso: 'pl-PL',
        file: 'pl-PL.js',
        name: 'Polski',
      }, {
        code: 'en',
        iso: 'en-US',
        file: 'en-US.js',
        name: 'English',
      }],
      defaultLocale: 'en',
    },
  },
});
