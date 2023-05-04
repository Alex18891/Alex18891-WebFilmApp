import { Controller, Get, Post, Body, Patch, Param, Delete, Query  } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Post()
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.create(createMovieDto);
  }

  @Get()
  findAll(@Query('page') page) {
  const OMDb_KEY = "9ed2556f";
  const searchMovies = async(page)=>
  {
    const url = `https://www.omdbapi.com/?apikey=${OMDb_KEY}&s=${page}`;
    const response =  await fetch(url);
    return await response.json();
  }

  return this.moviesService.findAll(searchMovies(page))
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.moviesService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesService.remove(+id);
  }
}
