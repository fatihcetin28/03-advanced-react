import avatar from '../../../assets/default-avatar.svg'

const Person = ({name, nickName='KamilFaik', images}) => {
    const img = images?.[0]?.small?.url || avatar;
  return (
    <div>
        <img src={img} alt={name} style={{width:'50px'}}/>
        <h4> {name} </h4>
        {/* <p>{nickName && 'Nickname: '} {nickName}</p> */}
        <p>Nickname: {nickName || 'Bulunamadı'}</p>
        -------------------------------
    </div>
  )
}
export default Person 