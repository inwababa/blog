module.exports = {
  mode: 'jit',                           //ADD THIS LINE
  purge: [                               //CONFIGURE CORRECTLY
    './storage/framework/views/*.php',
    './resources/**/*.blade.php',
    './resources/**/*.js',
    './config/*.php',
  ],  
  darkMode: false,
  theme: {
    extend: {
    },
  },
  variants: {
    extend: {                             //REMOVE EVERYTHING HERE
//      padding: ['first', 'last'],
//      margin: ['first', 'last'],
//      outline: ['hover', 'active'],
//      ringWidth: ['hover', 'active'],
//      ringColor: ['hover', 'active'],
//      backgroundColor: ['checked'],
    },
  },
  plugins: [],
}
