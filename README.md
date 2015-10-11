# Geometry
Useful API References links :  
- Mathf : http://docs.unity3d.com/ScriptReference/Mathf.html
- Vector2 : http://docs.unity3d.com/ScriptReference/Vector2.html

Live editing graph :
- Desmos : https://www.desmos.com/
- Example d'utilisation : https://www.desmos.com/calculator/zukjgk9iry
##
### Clamp
Bloque une valeur entre un minimum et un maximum

```c
float clamp (float value, float min, float max)
{
  return Mathf.Max(min, Mathf.Min(value, max));
}

// Unity
Mathf.Clamp(value, min, max);
```
![Clamp](http://leon196.github.io/Cours/images/clamp.png)
##
### Normalize a vector
Transforme la magnitude du vecteur (sa distance) pour qu'elle soit égale à 1

```c
Vector2 normalize (Vector2 vector)
{
  float distance = Mathf.sqrt(vector.x * vector.x + vector.y * vector.y);
  vector.x /= distance;
  vector.y /= distance;
  return vector;
}

// Unity
vector.Normalize();
```
![Clamp](http://leon196.github.io/Cours/images/normalize.png)
##
### Vector from two points
Le vecteur qui va d'un point d'origine à un point cible
```c
Vector2 vectorFrom (Vector2 a, Vector2 b)
{
  Vector2 c = new Vector2();
  c.x = b.x - a.x;
  c.y = b.y - a.y;
  return c;
}

// Unity
Vector2 c = b - a;
```
![Clamp](http://leon196.github.io/Cours/images/vectorFromTwoPoints.png)

##
### Find the angle of a vector (atan, atan2)
Calcule l'angle d'un vecteur. L'ordre des arguments est **y** puis **x**
```c
float angleOfVector (Vector2 vector)
{
  return Mathf.Atan2(vector.y, vector.x);
}
```
##
### Make a vector from an angle
Construit un vecteur normalisé à partir d'un angle
```c
Vector2 vectorOfAngle (float angle)
{
  return new Vector2(Mathf.Cos(angle), Mathf.Sin(angle));
}
```
![Clamp](http://leon196.github.io/Cours/images/vectorFromAngle.png)

##
### Linear Interpolation (mix, lerp)
Mélange deux valeurs selon un ratio. Le ratio doit être bloqué entre 0 et 1
```c
float mix (float a, float b, float ratio)
{
  return a * (1 - ratio) + b * ratio;
}

// Unity
Mathf.Lerp(a, b, ratio);
```
![Clamp](http://leon196.github.io/Cours/images/mix.png)

##
### The right side of a vector
Calcule la perpendiculaire d'un vecteur
```c
Vector2 getRight (Vector2 vector)
{
  return new Vector2( vector.y, -vector.x );
}
```
![Clamp](http://leon196.github.io/Cours/images/rightOfVector.png)

##
### Iterate circle perimeter
Calcule les points du périmètre d'un cercle, selon une position, un rayon et une résolution
```c
Vector2 origin;
float radius = 100;
int resolution = 16;
for (int i = 0; i < resolution; ++i)
{
  float angle = i / (float)resolution * Mathf.PI * 2f;
  Vector2 direction = new Vector2( Mathf.Cos(angle), Mathf.Sin(angle) );
  Vector2 circlePoint = origin + direction * radius;
}
```
![Clamp](http://leon196.github.io/Cours/images/circle.png)

##
# Arrays

Useful API References links :  
- Array : http://docs.unity3d.com/ScriptReference/Array.html
- List : https://msdn.microsoft.com/en-us/library/6sh2ey19.aspx

##
### Array
```c
float[] array = new float[32];
int count = array.Length;
```
##
### List in Unity
```c++
using System.Collections.Generic;

public class MyClass : MonoBehaviour
{
  // Declaration
  List<GameObject> gameObjectList;

  void Start ()
  {
    // Initialisation
    gameObjectList = new List<GameObject>();

    // Populate
    gameObjectList.Add( new GameObject() );

    // Iteration style 1
    for (int i = 0; i < gameObjectList.Count; ++i)
    {
      GameObject obj = gameObjectList[i];
      Debug.Log(obj.name);
    }

    // Iteration style 2
    foreach (GameObject obj in gameObjectList)
    {
      Debug.Log(obj.name);
    }
  }
}
```

##
### Random item
Retourne un élément de la liste de manière aléatoire
```c
float[] array = new float { 54, 654, 10, 89, 64, 32, 17 };

float randomItem ()
{
  int randomIndex = (int) Mathf.Floor( Random.Range( 0f, array.Length ) );
  return array[randomIndex];
}
```
##
### Suffle array
Réarrange aléatoirement les indices d'une liste
```c
// http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array

float[] suffleArray (float[] array)
{
 for (int i = array.Length - 1; i > 0; i--)
 {
     int j = Mathf.Floor(Random.Range(0f, 1f) * (i + 1));
     float temp = array[i];
     array[i] = array[j];
     array[j] = temp;
 }
 return array;
}
```
##
### Random unique numbers
Génère une liste de nombre consécutive dont l'ordre est aléatoire  
Utile pour créer du hazard sans retomber tout de suite sur une même valeur
```c
float[] randomUniqueNumbers (int range)
{
  float[] list = new float[range];
  for (int i = 0; i < range; i++)
  {
    list[i] = i;
  }
  return shuffleArray(list);
}
```
##
# Animation

### Tweening
> Le terme tweening (ou interpolation) désigne un procédé dans l'animation qui permet de générer des images intermédiaires successives de telle sorte qu'une image s'enchaîne agréablement et de façon fluide avec la suivante.  
-- Wikipedia  

##
### Easing
La manière dont le tweening entre deux états va être calculée  
Des examples : http://easings.net/fr
##
### Simple tweening with linear easing
```c
float timeStarted;
float timeElapsed;
float timeDelay;

void StartTween ()
{
  timeStarted = Time.time;
  timeElapsed = 0;
  timeDelay = 5;
}

void UpdateTween ()
{
  timeElapsed = Time.time - timeStarted;
  float animationPercentage = timeElapsed / timeDelay;
  animationPercentage = 100f * Mathf.Clamp(animationPercentage, 0f, 1f);
}
```

![Clamp](http://leon196.github.io/Cours/images/animation.png)

Example d'utilisation avec une interpolation :
![Clamp](http://leon196.github.io/Cours/images/animation2.png)

Example d'un easing special : commence a 0 passe par 1 et finit a 0
![Clamp](http://leon196.github.io/Cours/images/animation3.png)
##
# Physics  

Useful API References links :  
- Bounds : http://docs.unity3d.com/ScriptReference/Bounds.html
- Physics : http://docs.unity3d.com/ScriptReference/Physics.html

##
### Simple border collision

```c
position.x = Mathf.Clamp(position.x, 0, Screen.width);
position.y = Mathf.Clamp(position.y, 0, Screen.height);
```
##
### Simple border bounce

```c
if (position.x < 0 || position.x > Screen.width)
{
  direction.x = direction.x * -1;
}
else if (position.y < 0 || position.y > Screen.height)
{
  direction.y = direction.y * -1;
}
```
![Clamp](http://leon196.github.io/Cours/images/bounce.png)
##
### Simple point collision with rectangle
Bounds est le rectangle qui engloble de l'objet  
http://docs.unity3d.com/ScriptReference/Bounds.html
```c
// Translate bounds to left, righ, top and down
// Depends on world axis orientation
float left = bounds.min.x;
float right = bounds.max.x;
float top = bounds.max.y;
float down = bounds.min.y;

bool hitBoxCollision (Vector2 point, Bounds bounds)
{
  return point.x > bounds.min.x
      && point.x < bounds.max.x
      && point.y > bounds.min.y
      && point.y < bounds.max.y;
}

// Unity
bounds.Contains(position);
```
![Clamp](http://leon196.github.io/Cours/images/boxCollision.png)
##
### Simple point collision with circle
```c

bool hitCircleCollision (Vector2 point, Vector2 circlePosition, float circleRadius)
{
  return Vector2.Distance(point, circlePosition) - circleRadius <= 0;
}
```
![Clamp](http://leon196.github.io/Cours/images/circleCollision.png)
##
### Fade a value to 0
Amène une valeur positive ou négative vers 0  
Utile pour, par exemple, à l'inertie, la vélocite ou un flux
```c
float fadeOut (float value, float ratio)
{
  return value * ratio;
}

// -54 going quickly to 0
fadeOut(-54, 0.9);

// 13 going slowly to 0
fadeOut(13, 0.9999);
```
![Clamp](http://leon196.github.io/Cours/images/velocity.png)

##
### Simple character control
```c
float acceleration = 3.0;
const float MAX_SPEED = 15.0;

// Calculate velocity from inputs
if (right)
{
  velocity.x = velocity.x + acceleration;
}
else if (left)
{
  velocity.x = velocity.x - acceleration;
}
if (up)
{
  velocity.y = velocity.y + acceleration;
}
else if (down)
{
  velocity.y = velocity.y - acceleration;
}

velocity = Vector2.ClampMagnitude(velocity, MAX_SPEED);

// Apply velocity
position += velocity;

// Fade out velocity, creating inertia
velocity = fadeOut(velocity, 0.95);

```
##
### Reflect vector
Calcule l'angle de réflection d'un vecteur selon une normal  
Utile pour faire des collisions avancées
```c
// By abeall
// http://www.actionscript.org/forums/showthread.php3?t=176052
// reflect vector 'v' against normalized vector 'n'
// R = V - 2 * (V · N)

float dotProduct (v1, v2)
{
  return (v1.x * v2.x) + (v1.y * v2.y);
}

Vector2 reflect (Vector2 vector, Vector2 normal)
{
  float d = dotProduct(v,n);  
  float x = vector.x - 2 * d * normal.x;
  float y = vector.y - 2 * d * normal.y;
  return new Vector2(x, y);
}
```
![Clamp](http://leon196.github.io/Cours/images/reflected.png)
