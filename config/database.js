module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'ec2-34-233-157-9.compute-1.amazonaws.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'd9n471bqphqrrp'),
      user: env('DATABASE_USERNAME', 'agzyvardhsowez'),
      password: env('DATABASE_PASSWORD', '79a31b1af9b0b897cf1a515f8430b14d36c2278b48435955bdb4cb18e104aed5'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
