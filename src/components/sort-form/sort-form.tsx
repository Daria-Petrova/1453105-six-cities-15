import {useBoolean} from '../../hooks/use-boolean.ts';
import {useEffect} from 'react';
import {SORT_OPTIONS, SortOption} from '../../const/const.ts';
import * as classNames from 'classnames';

type SortFormProps = {
  current: SortOption;
  setter: (option: SortOption) => void;
}

function SortForm({current, setter }: SortFormProps){
  const { isOn, off, toggle} = useBoolean(false);

  useEffect(() => {
    if (isOn) {
      const onEscKeyDown = (evt: KeyboardEvent) => {
        if (evt.key === 'Escape') {
          evt.stopPropagation();
          off();
        }
      };

      document.addEventListener('keydown', onEscKeyDown);
      return () => {
        document.removeEventListener('keydown', onEscKeyDown);
      };
    }
  }, [isOn, off]);

  const selectedOption = SORT_OPTIONS[current];

  return(
    <form className="places__sorting" action="#" method="get" onClick={toggle}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {selectedOption}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classNames('places__options',' places__options--custom', {'places__options--opened': isOn})}>
        { SORT_OPTIONS.map((option, index) => (
          <li className={classNames('places__option', {'places__option--active': selectedOption === option})}
            key={option}
            onClick={() => setter(index) }
            tabIndex={0}
          >{option}
          </li>
        ))}
      </ul>
    </form>
  );
}
export default SortForm;
