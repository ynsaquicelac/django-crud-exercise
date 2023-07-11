FROM public.ecr.aws/lambda/python:3.9

ADD django_crud_api ${LAMBDA_TASK_ROOT}/django_crud_api

COPY requirements.txt  .

RUN  pip3 install -r requirements.txt --target "${LAMBDA_TASK_ROOT}"

CMD [ "inventory_app.main.handler" ]
