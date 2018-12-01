# Group/login

## args

- GSC
- id
- password

## input

```text
{
    GSC:'GroupKey',
    id:''GroupUserId,
    password:'GroupUserPassword'
}
```

## result

```JavaScript
{
    state:true,
    metadata:'{ name: Wonho, age: 18 }'
}
```

## desription

`GSC`는 그룹의 비밀키입니다. 이것으로 그룹을 특정합니다.
`id`로 그룹에서 로그인 합니다.
`password`는 당신 회원의 비밀번호입니다. 이것으로 그룹에서 로그인 합니다.

그룹에 로그인하는 기능입니다. 로그인하는 시점에 사용됩니다. 메타데이터로 받는 데이터는 json으로 add에서 이미 넣은 데이터입니다. id/pass가 틀린경우 false가 나오며 metadata에는 null이 들어가게됩니다.