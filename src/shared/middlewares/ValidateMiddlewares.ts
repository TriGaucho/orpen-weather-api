import { Request, Response, NextFunction } from 'express'

function ValidWeatherMiddleware(schema: any) {
  const validation = (req: Request, res: Response, next: NextFunction) => {
    const { query } = req;

    const errors: string[] = check(schema, query);

    if (errors.length > 0) return res.status(400).json(errors)

    return next();
  }

  return validation;
}

function ValidWebHookMiddleware(schema: any) {
  const validation = (req: Request, res: Response, next: NextFunction) => {
    const { body } = req;

    const errors: string[] = check(schema, body);

    if (errors.length > 0) return res.status(400).json(errors)

    return next();
  }

  return validation;
}

function check(schema: any, fields: any ) {
  const errors: string[] = [];

  Object.keys(schema).forEach(item => {
    const itemSchema = schema[item]

    if (itemSchema.required && !fields[item]) {
      return errors.push(`Query Params '${item}' is required ${itemSchema.required}`)
    }

    if (itemSchema.size && (fields[item].length !== itemSchema.size)) {
      errors.push(`Query Params '${item}' is size ${itemSchema.size}`)
    }

  })

  return errors
}

export { ValidWeatherMiddleware, ValidWebHookMiddleware }
