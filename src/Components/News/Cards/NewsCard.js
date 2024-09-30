import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import image from '../../../imgs/image.jpg';

export default function NewsCard() {
  return (
    <Card sx={{ minWidth: 300 }}     style={{ margin: '10px 0', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)'}}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="200" // Set the height you want
        width="100%" // Set the width to 100% for responsiveness
        image={image} // Correctly passing the image source here
        sx={{ objectFit: 'cover' }} // Ensures the image covers the area properly
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        لا يتجزأ من تجربة الإنسان، فهي تمنحنا الفرصة للتعلم والنمو. على الرغم من أن بعض التحديات قد تبدو صعبة،
         إلا أن التفكير الإيجابي والتخطيط الجيد يمكن أن يساعدا في حلها.
         واحدة من أهم المهارات التي يمكن أن نطورها هي القدرة على التعامل مع المشكلات بطريقة هادئة ومنظمة.
         يجب علينا دائمًا البحث عن الحلول الممكنة بدلاً من التركيز على العقبات.
         بالإضافة إلى ذلك، يعتبر التعاون مع الآخرين والاستماع إلى آرائهم جزءًا مهمًا من عملية حل المشكلات.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">تفاصيل اكثر</Button>        
        <Button size="small">مشاركة</Button>
      </CardActions>
    </Card>
  );
}