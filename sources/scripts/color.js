
var Color = {}

Color.White = '#ffffff';
Color.Gray05 = '#CACACA';
Color.Gray10 = '#EBEBEB';
Color.Gray15 = '#E1E1E1';
Color.Gray20 = '#D7D7D7';
Color.Gray25 = '#D7D7D7';
Color.Gray30 = '#C2C2C2';
Color.Gray35 = '#B7B7B7';
Color.Gray40 = '#ACACAC';
Color.Gray45 = '#A0A0A0';
Color.Gray50 = '#959595';
Color.Gray55 = '#898989';
Color.Gray60 = '#7D7D7D';
Color.Gray65 = '#707070';
Color.Gray70 = '#626262';
Color.Gray75 = '#555555';
Color.Gray80 = '#464646';
Color.Gray85 = '#363636';
Color.Gray90 = '#262626';
Color.Gray95 = '#111111';
Color.Black = '#000000';

Color.grays = [Color.White, Color.Gray05, Color.Gray10, Color.Gray15, Color.Gray20, Color.Gray25, Color.Gray30,
Color.Gray35, Color.Gray40, Color.Gray45, Color.Gray50, Color.Gray55, Color.Gray60,
Color.Gray65, Color.Gray70, Color.Gray75, Color.Gray80, Color.Gray85, Color.Gray90, Color.Gray95, Color.Black];

Color.GetGray = function(ratio)
{
  return Color.grays[Math.floor(ratio * Color.grays.length)]
}
