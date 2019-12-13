import { Router } from 'express';
import Status from 'http-status';
import { formatter } from '../../../../infra/support/helpers/date';

/**
 * Router of attendance module
 *
 * @return {router} router verbs of attendance
*/
module.exports = ({
  logger,
  jayessdb,
  response: { Success, Fail },
}) => {
  const router = Router();

  router.get('/rules', async (req, res) => {
    const d = formatter(new Date());

    return res.status(Status.OK).json(Success(`get attendance rules works! ${d}`));
  });

  router.get('/rules/:interval', async (req, res) => {
    logger.info('attendance router works!');
  });

  router.post('/rules', async (req, res) => {
    const modelToPost = {
      attendanceRules: [
        {
          id: 'uuid v4',
          attendanceType: 'Especialization 1',
          medical: 'Dr. House',
          date: {
            at: '25/06/2018',
            intervals: [{ start: '14:30', end: '15:00' }, { start: '15:10', end: '15:30' }],
          },
        },
        {
          id: 'uuid v4',
          attendanceType: 'Especialization 2',
          medical: 'Dr. Shawn',
          date: {
            at: 'all_days',
            intervals: [{ start: '09:30', end: '10:15' }],
          },
        },
        {
          id: 'uuid v4',
          attendanceType: 'Especialization 3  ',
          medical: 'Dr. Dolittle',
          date: {
            at: 'weekly',
            days: ['monday', 'wednesday'],
            intervals: [{ start: '14:00', end: '14:30' }],
          },
        },
      ],
    };

    logger.info('attendance router works!');
  });

  router.delete('/rules/:id', async (req, res) => {
    logger.info('attendance router works!');
  });

  return router;
};
