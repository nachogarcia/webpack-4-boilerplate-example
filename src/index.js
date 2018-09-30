import 'regenerator-runtime/runtime'
import axios from 'axios'
import PhraseService from './js/services/PhraseService'
import './fontIcons.font'
import './scss/styles.scss'

const httpClient = axios.create()

global.phraseService = new PhraseService(httpClient)
