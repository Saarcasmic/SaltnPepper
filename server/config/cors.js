const corsOptions = {
  origin: 'https://saltypepper.netlify.app/',
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
};

export default corsOptions; 