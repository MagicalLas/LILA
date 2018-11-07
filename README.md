# LILA

LILA is Login API

## Discription

LILA는 로그인 기능을 구현하지 않아도 웹으로 쉽게 구현이 가능하게 하는 프로젝트입니다. RESTFUL API로 로그인 기능을 구현하며, 동적 할당이 가능합니다. GraphQL를 일부 채택하였으며 현재 Node로 구현된 구현체가 존재합니다. Mysql은 Docker로 실행됩니다. 현재 Django로 다시 제작중입니다.

## Requirements

- LILA :: Login
  - POST로 ID/PASSWORD전달받는다.
  - Group이 없다면 전체에서 찾고 아니면 그룹 내부에서 찾는다.
  - 로그인이 성공했는지 알려준다.

- LILA :: Register
  - POST로 Group/ID/PASSWORD전달받는다.
  - 내부 테이블에서 정보를 추가한다.
  - 회원가입이 성공했는지 알려준다.

- LILA :: Create
  - POST로 Group/---을전달받는다.
  - 내부 테이블을 생성한다.
  - 그룹이 중복이라면 실패하고 중복이 아니라면 성공한다.
  - 실행 결과를 알려준다.

## ERD

![image](./Image/ERD.png)
![image](./Image/ERD2.png)
![image](./Image/ERD3.png)
1:N인 User와 Table의 관계이다.

## Table

- User
  - ID
    - string
    - 유니크 키
  - Password
    - string
  - Name
    - string
    - NULL 가능

- Service
  - ID
    - string
    - 왜래키
  - Table ID
    - string
    - 왜래키

- Table
  - Group
    - string
  - Table ID
    - INT
    - 유니크 키
  - ID
    - string
  - Password
    - string
  - etc
    - 추가 가능

## Command

| End Point | arg | desription  |
| --------- |:---:| -----------:|
| Login/new     |                                    | 새로운 계정 등록 |
| Group/new     |  Sc Key                            | 새로운 그룹 등록 |
| Group/add     |  Group_Sc, Id, Password, Metadata  | 새로운 유저 등록 |
| Group/change  |  Group_Sc, Id, Metadata            | 새로운 유저 등록 |
| Group/login   |  Group_Sc, Id, Password            | 그룹에 유저가 있는지 확인 |
| Account/group |                                    | 관리하는 그룹 표시 |

현장체험활동을 가게되었을때 나는 부정적인 생각이었다. 가기 싫었던 것도 사실이었다. 그 장소에서 보았던 것은 딱히 없다. 그러나 느낌점은 많다. 일단, 올라가면서 꽤 힘들었다. 다리는 아프지 않았지만 허리가 아팠고 지쳤다. 11월임에도 불구하고 꽤 더운 날씨로 나는 것옷을 벗고 들고 올라가게 되었다. 올라가기전에 사진을 찍고 올라갔는데 우리는 조금 늦게 출발하여서 선두와 거리가 있었다. 그러나 빨리 올라가는것을 좋아하기에 나와 정현이는 빨리 올라갔다. 처음에는 빠르게 갔으며 중간에 물이 부족해져 태영호님께 물을 더 받기도 하였다. 그래도 물이 부족한 것은 차이가 없었다. 올라가면서 든 생각은 여러가지가 있는데 내가 예전에 산을 많이 다녔다는 것과 부정적인 생각이 많았다. 우리는 중간에 노래를 들으며 산을 올랐는데 정현이가 유튜브로 군가를 틀기도 하였으며 트로트와 같은 평소에 듣지 못하던 노래도 듣게되었다. 목적지에 올라서서는 더웠다. 심각하게 더워서 교복을 입은게 후회가 되었다. 산에는 유독 거미가 많았다. 그래서 거미의 눈을 터뜨리고 배를 가른다음 해부하는 생각을 하였다. 내려올때는 빨리 내려왔다. 개인적인 생각이지만 이 곳에 온 의미는 없다고 생각이 들었다. 왜냐하면 실존주의적인 관점에서 생각한다면 행동에서 의미를 찾는 것은 불가능하며 옳지않다. 단지 이런 행동이 있었고 원인과 결과가 있을 뿐이다.
58cafbd8aa2e3d6026fe861c4c34cfdd2e8bdddd
00bad8edea93d82a59f594355fb35c81025dbae2