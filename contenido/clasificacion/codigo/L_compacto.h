#define TItem int

class NODO
{
  int soporte;
  NODO *hijos;
  
public:
  NODO(TItem item,
       TItem N, 
       TItem numHermanosMenores) : soporte(0),
                                   hijos(NULL)
  {
    TItem numHijos = N - item - numHermanosMenores;
    try
    {
      hijos = new (TItem *)[numHijos];
    }
    catch (...)
    {
      //
    }
  }
  
  ~NODO()
  {
    delete hijos;
  }
}