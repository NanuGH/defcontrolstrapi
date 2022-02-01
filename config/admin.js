module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a66374922babb8d37203538d21f0ddbb'),
  },
});
