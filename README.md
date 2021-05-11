# Login

- email: doancnpmnhomnike@gmail.com
- Password: 12345678zZ@

# CICD

`Testing`

- Push code lên nhánh `master` , hệ thống sẽ tự động chạy và cập nhật server testing, xem chi tiết tại: [![Testing](https://github.com/nhom4nike/front-end/actions/workflows/testing.yml/badge.svg)](https://github.com/nhom4nike/front-end/actions/workflows/testing.yml)

- Link docker image:
  https://hub.docker.com/repository/docker/04nike/front-end

- Testing URL:
  https://test.04-nike.tk/

`Deployment`

- Sau khi chạy server testing ổn thì chấp nhập deploy lên production tại:

- Link docker image:
  https://hub.docker.com/repository/docker/04nike/front-end

- Production URL:
  https://04-nike.tk/

# Frontend

## Lưu ý

- `eslint ` sẽ chạy với mỗi commit, nên hãy fix error cho các file được thay đổi trước rồi hãy commit nhé

## Commands

- development: `npm run dev`

- build: `npm run build`

## Import alias

tham khảo app.jsx và index.jsx

- `@/styles` -> `src/styles`

- `@/components` -> `src/components`

- `@/pages` -> `src/pages`

- `@/` -> `./`

- `@/public` -> `public`
