import React, { useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';
import { H2 } from 'elements/Typography';
import { ICast } from 'interfaces';
import { MinimalCarousel } from 'components';
import { Avatar } from 'icons';
import { ThemeProps } from 'interfaces';

const CastWrapper = styled.div`
  .cast-img {
    cursor: pointer;
  }

  margin-bottom: 2rem;
  h2 {
    margin-bottom: 1rem;
  }
  .cast-img-container {
    display: flex;

    .cast-img {
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      margin: 0 1rem;
      overflow: hidden;
      flex-shrink: 0;

      img {
        width: 5rem;
        height: auto;
      }
    }
  }
`;

const Cast: React.FC<{ cast: Array<ICast>; callback: Function }> = ({
  cast,
  callback
}) => {
  const theme: ThemeProps = useContext(ThemeContext);
  const handleCast = ():
    | Array<React.ReactElement>
    | React.ReactElement
    | null => {
    let casts = [];
    let crews = cast;
    // limit cast to 20
    if (Array.isArray(crews)) {
      if (crews.length > 20) {
        crews = crews.slice(0, 20);
      }
      casts = crews.map(cast => {
        return (
          <div
            className='cast-img'
            key={cast.id}
            onClick={() => {
              callback(cast.id);
            }}
          >
            {cast.profile_path !== null ? (
              <img
                src={`https://image.tmdb.org/t/p/w780/${cast.profile_path}`}
                alt={cast.name}
              />
            ) : (
              <div>
                <Avatar
                  width={50}
                  height={50}
                  color={theme.secondaryTextColour}
                />
              </div>
            )}
          </div>
        );
      });
      return casts;
    }
    return null;
  };
  return (
    <CastWrapper>
      <H2 style={{ fontSize: '1.3rem', textTransform: 'uppercase' }}>Cast</H2>
      <div className='cast-img-container'>
        {cast.length > 0 ? (
          <MinimalCarousel translate={70}>{handleCast()}</MinimalCarousel>
        ) : (
          <p className='paragraph desc-item read-more'>
            Cast not available at this moment
          </p>
        )}
      </div>
    </CastWrapper>
  );
};

export default Cast;
