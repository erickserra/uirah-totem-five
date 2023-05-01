import './index.scss'
import buttonVoltar from './../../assets/voltar.png'
import buttonInicio from './../../assets/inicio.png'
import buttonProximo from './../../assets/proximo.png'
import PaginationImageOne from './../../assets/1_de_2.png'
import PaginationImageTwo from './../../assets/2_de_2.png'
import PaginationImageOneofOne from './../../assets/pag_1_de_1.png'

export function ArrowButtons({ back, beginning, next, paginationOne, paginationTwo, hideNext, hidePrevious, hideBeginning, paginationOneofOne }) {
  return (
    <div className="arrow-buttons-wrapper">
      {paginationOneofOne ? (<img src={PaginationImageOneofOne} alt="Página Atual" />) : null}
      {paginationOne ? (<img src={PaginationImageOne} alt="Página Atual" />) : null}
      {paginationTwo ? (<img src={PaginationImageTwo} alt="Página Atual" />) : null}

      <div className="arrow-buttons-flex">
        {!hidePrevious ? (
          <button onClick={back}>
            <img src={buttonVoltar} alt="Voltar" />
          </button>
        ) : <div style={{ width: '216px' }}></div>}
        {!hideBeginning ? (
          <button onClick={beginning} className="inicio">
            <img src={buttonInicio} alt="Início" />
          </button>
        ) : <div style={{ width: '216px' }}></div>}
        {!hideNext ? (
          <button onClick={next}>
            <img src={buttonProximo} alt="Próximo" />
          </button>
        ) : <div style={{ width: '216px' }}></div>}
      </div>

    </div>
  )
}