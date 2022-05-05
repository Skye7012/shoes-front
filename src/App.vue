<template>
  <section class="hero is-fullheight">
    <div class="hero-head">
      <nav class="navbar">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item">
              <p class="title is-2 has-text-info">Shoes</p>
            </a>
          </div>
          <div id="navbarMenuHeroB" class="navbar-menu">
            <a class="navbar-item">
              <div class="field has-addons">
                <p class="control has-icons-left">
                  <input class="input" type="text" placeholder="Найти">
                  <span class="icon is-left">
                    <i class="fas fa-search" aria-hidden="true"></i>
                  </span>
                </p>
                <p class="control">
                  <button class="button is-info">
                    Найти
                  </button>
                </p>
              </div>
            </a>
            <div class="navbar-end">
              <span class="navbar-item">
                <a class="button is-inverted">
                  <span class="icon">
                    <i class="icons fa-solid fa-user"></i>
                  </span>
                  <span>Войти</span>
                </a>
              </span>
              <span class="navbar-item">
                <a class="button is-inverted">
                  <span class="icon">
                    <i class="fa-solid fa-cart-shopping"></i>
                  </span>
                  <span>Корзина</span>
                </a>
              </span>
            </div>
          </div>
        </div>
      </nav>
    </div>

    <div class="hero-body">
      <div class="tile is-ancestor">
        <div class="tile is-2 is-parent">
          <div class="tile is-child box">
            <aside class="menu">
              <p class="menu-label">
                Брэнды
              </p>
              <ul class="menu-list">
                <li>
                  <label class="checkbox">
                    <input type="checkbox">
                    Adidas
                  </label>
                </li>
                <li>
                  <label class="checkbox">
                    <input type="checkbox">
                    Nike
                  </label>
                </li>
              </ul>
              <p class="menu-label">
                Сезон
              </p>
              <ul class="menu-list">
                <li>
                  <label class="checkbox">
                    <input type="checkbox">
                    Лето
                  </label>
                </li>
                <li>
                  <label class="checkbox">
                    <input type="checkbox">
                    Демисезон
                  </label>
                </li>
              </ul>
              <p class="menu-label">
                Назначение
              </p>
              <ul class="menu-list">
                <li>
                  <div class="checkbox">
                    <input type="checkbox">
                    Повседневность
                    </div>
                </li>
                <li>
                  <label class="checkbox">
                    <input type="checkbox">
                    Баскетбол
                  </label>
                </li>
              </ul>
            </aside>
          </div>
        </div>
        <div class="tile is-vertical is-parent">
            <div class="tile is-child box">

              <div class="level">
                <div class="level-left">
                  <div class="level-item">
                    <div class="dropdown">
                      <div class="dropdown-trigger">
                        <button class="button is-small" aria-haspopup="true" aria-controls="dropdown-menu">
                          <span>Популярные</span>
                          <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                          </span>
                        </button>
                      </div>
                      <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                          <a href="#" class="dropdown-item">
                            Популярные
                          </a>
                          <hr class="dropdown-divider">
                          <a class="dropdown-item">
                            Сначала дешевые
                          </a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item">
                            Сначала дорогие
                          </a>
                          <hr class="dropdown-divider">
                          <a href="#" class="dropdown-item">
                            По размеру скидки
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="level-item">
                  <nav class="pagination is-centered is-small" role="navigation" aria-label="pagination">
                    <a class="pagination-previous">Previous</a>
                    <a class="pagination-next">Next page</a>
                    <ul class="pagination-list">
                      <li><a class="pagination-link" aria-label="Goto page 1">1</a></li>
                      <li><span class="pagination-ellipsis">&hellip;</span></li>
                      <li><a class="pagination-link is-current" aria-label="Page 46" aria-current="page">1</a></li>
                      <li><span class="pagination-ellipsis">&hellip;</span></li>
                      <li><a class="pagination-link" aria-label="Goto page 86">86</a></li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>


            <div class="tile is-child box">
            
              <div class="columns is-multiline">
                <div class="column is-one-third">
                  
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by4">
                        <img src="1.webp" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="card-content">
                      <p class="title">
                        “There are two ”
                      </p>
                      <p class="subtitle">
                        Jeff Atwood
                      </p>
                    </div>
                    <footer class="card-footer">
                      <a class="card-footer-item has-background-link has-text-white">
                        <span>
                          <i class="fa-solid fa-cart-shopping"></i>
                          Купить
                        </span>
                      </a>
                    </footer>
                    </div>
                  </div>

                <div class="column is-one-third">
                  
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by4">
                        <img src="1.webp" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="card-content">
                      <p class="title">
                        “There are two ”
                      </p>
                      <p class="subtitle">
                        Jeff Atwood
                      </p>
                    </div>
                    <footer class="card-footer">
                      <p class="card-footer-item">
                        <span>
                          Add
                        </span>
                      </p>
                      <p class="card-footer-item">
                        <span>
                          Buy
                        </span>
                      </p>
                    </footer>
                  </div>

                </div>

                <div class="column is-one-third">
                 
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by4">
                        <img src="1.webp" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="card-content">
                      <p class="title">
                        “There are two ”
                      </p>
                      <p class="subtitle">
                        Jeff Atwood
                      </p>
                    </div>
                    <footer class="card-footer">
                      <p class="card-footer-item">
                        <span>
                          Add
                        </span>
                      </p>
                      <p class="card-footer-item">
                        <span>
                          Buy
                        </span>
                      </p>
                    </footer>
                  </div>

                </div>

                <div class="column is-one-third">
                  
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by4">
                        <img src="1.webp" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="card-content">
                      <p class="title">
                        “There are two ”
                      </p>
                      <p class="subtitle">
                        Jeff Atwood
                      </p>
                    </div>
                    <footer class="card-footer">
                      <p class="card-footer-item">
                        <span>
                          Add
                        </span>
                      </p>
                      <p class="card-footer-item">
                        <span>
                          Buy
                        </span>
                      </p>
                    </footer>
                  </div>

                </div>

                <div class="column is-one-third">
                  
                  <div class="card">
                    <div class="card-image">
                      <figure class="image is-3by4">
                        <img src="1.webp" alt="Placeholder image">
                      </figure>
                    </div>
                    <div class="card-content">
                      <p class="title">
                        “There are two ”
                      </p>
                      <p class="subtitle">
                        Jeff Atwood
                      </p>
                    </div>
                    <footer class="card-footer">
                      <p class="card-footer-item">
                        <span>
                          Add
                        </span>
                      </p>
                      <p class="card-footer-item">
                        <span>
                          Buy
                        </span>
                      </p>
                    </footer>
                  </div>

                </div>
              </div>
            
            </div>
        </div>
      </div>
    </div>

    <div class="hero-foot">
      <footer class="footer">
        <nav class="level">
            <p class="level-item title is-2 has-text-info">Shoes</p>
            <p class="level-item has-text-centered">
              Тел<br>
              8 987 689 54 71</p>
            <p class="level-item has-text-centered">
              Адрес<br>
              г. Москва ул. Пушкина д. Колотушкина
            </p>
        </nav>
      </footer>
    </div>
  </section>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>

</style>
